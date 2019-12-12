/**
 * Device address (8-bits)
 * Message ID (7-bits)
 * Need ACK (1-bit)
 * Data dize (1-byte)
 * Page # (1-byte)
 * Integrity code (1-byte)
 * Data (N-Bytes)
 */

export enum Device {
  COMMS = 1,
  POWER = 2,
  GNC   = 4,
  PAY   = 8,
  C_DH  = 16,
}

export enum MessageType {
  NOP = 0,
  HEARTBEAT = 1
}

export interface Message {
  deviceAddress: Device
  messageId: MessageType
  needAck: boolean
  dataSize: number
  pageNumber: number
  integrityCode: number // TODO What is this?
  data: Uint8Array
}

export const serialization = (msg: Message): Uint8Array => {
  const buffer = []
  buffer.push(msg.deviceAddress)
  buffer.push((msg.messageId << 1) | (msg.needAck ? 1 : 0))
  buffer.push(msg.dataSize)
  buffer.push(msg.pageNumber)
  buffer.push(msg.integrityCode)
  buffer.push(...msg.data.slice(0, msg.dataSize))
  return Uint8Array.from(buffer)
}

export const deserialization = (data: Uint8Array): Message => {
  return {
    deviceAddress: data[0],
    messageId: (data[1] & 0xFE) >> 1,
    needAck: (data[1] & 0x01) === 1,
    dataSize: data[2],
    pageNumber: data[3],
    integrityCode: data[4],
    data: data.slice(5, 5 + data[2])
  }
}