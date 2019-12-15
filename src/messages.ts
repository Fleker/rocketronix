import { Message, Device, MessageType } from './serialization';

export const MESSAGE_MAP: {[alias: string]: Message} = {
  // DEVICE HEARTBEATS
  HEARTBEAT_COMMS: {
    deviceAddress: Device.COMMS,
    messageId: MessageType.HEARTBEAT,
    needAck: false,
    dataSize: 0,
    pageNumber: 0,
    integrityCode: 6,
    data: Uint8Array.from([])
  },
  HEARTBEAT_POWER: {
    deviceAddress: Device.POWER,
    messageId: MessageType.HEARTBEAT,
    needAck: false,
    dataSize: 0,
    pageNumber: 0,
    integrityCode: 10,
    data: Uint8Array.from([])
  },
  HEARTBEAT_GNC: {
    deviceAddress: Device.GNC,
    messageId: MessageType.HEARTBEAT,
    needAck: false,
    dataSize: 0,
    pageNumber: 0,
    integrityCode: 18,
    data: Uint8Array.from([])
  },
  HEARTBEAT_PAY: {
    deviceAddress: Device.PAY,
    messageId: MessageType.HEARTBEAT,
    needAck: false,
    dataSize: 0,
    pageNumber: 0,
    integrityCode: 34,
    data: Uint8Array.from([])
  },
}

export const hash = (deviceAddress: Device, messageId: MessageType, data: Uint8Array) => {
  const sumOfData = data.reduce((prev, current) => prev + current)
  return ((deviceAddress << 2) | (messageId << 1) | sumOfData) & 0xFF
}
