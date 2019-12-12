import { Message, Device, MessageType } from './serialization';

export const MESSAGE_MAP: {[alias: string]: Message} = {
  // DEVICE HEARTBEATS
  HEARTBEAT_COMMS: {
    deviceAddress: Device.COMMS,
    messageId: MessageType.HEARTBEAT,
    needAck: false,
    dataSize: 0,
    pageNumber: 0,
    integrityCode: 0,
    data: Uint8Array.from([])
  },
  HEARTBEAT_POWER: {
    deviceAddress: Device.POWER,
    messageId: MessageType.HEARTBEAT,
    needAck: false,
    dataSize: 0,
    pageNumber: 0,
    integrityCode: 0,
    data: Uint8Array.from([])
  },
  HEARTBEAT_GNC: {
    deviceAddress: Device.GNC,
    messageId: MessageType.HEARTBEAT,
    needAck: false,
    dataSize: 0,
    pageNumber: 0,
    integrityCode: 0,
    data: Uint8Array.from([])
  },
  HEARTBEAT_PAY: {
    deviceAddress: Device.PAY,
    messageId: MessageType.HEARTBEAT,
    needAck: false,
    dataSize: 0,
    pageNumber: 0,
    integrityCode: 0,
    data: Uint8Array.from([])
  },
}