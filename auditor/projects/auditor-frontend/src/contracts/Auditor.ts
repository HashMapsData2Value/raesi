/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  AppState,
  AppStorageSchema,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom, SendTransactionParams } from '@algorandfoundation/algokit-utils/types/transaction'
import type { ABIResult, TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer, modelsv2 } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "hello(string)string": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "dlog(byte[],byte[],byte[],byte[])bool": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "dleq(byte[],byte[],byte[],byte[],byte[],byte[],byte[])bool": {
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCgpzbWFydF9jb250cmFjdHMuYXVkaXRvci5jb250cmFjdC5BdWRpdG9yLmFwcHJvdmFsX3Byb2dyYW06CiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weTo3CiAgICAvLyBjbGFzcyBBdWRpdG9yKEFSQzRDb250cmFjdCk6CiAgICB0eG4gTnVtQXBwQXJncwogICAgYnogbWFpbl9iYXJlX3JvdXRpbmdANwogICAgbWV0aG9kICJoZWxsbyhzdHJpbmcpc3RyaW5nIgogICAgbWV0aG9kICJkbG9nKGJ5dGVbXSxieXRlW10sYnl0ZVtdLGJ5dGVbXSlib29sIgogICAgbWV0aG9kICJkbGVxKGJ5dGVbXSxieXRlW10sYnl0ZVtdLGJ5dGVbXSxieXRlW10sYnl0ZVtdLGJ5dGVbXSlib29sIgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAogICAgbWF0Y2ggbWFpbl9oZWxsb19yb3V0ZUAyIG1haW5fZGxvZ19yb3V0ZUAzIG1haW5fZGxlcV9yb3V0ZUA0CiAgICBlcnIgLy8gcmVqZWN0IHRyYW5zYWN0aW9uCgptYWluX2hlbGxvX3JvdXRlQDI6CiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weTo4CiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBpcyBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5OjcKICAgIC8vIGNsYXNzIEF1ZGl0b3IoQVJDNENvbnRyYWN0KToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGV4dHJhY3QgMiAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weTo4CiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgaGVsbG8KICAgIGR1cAogICAgbGVuCiAgICBpdG9iCiAgICBleHRyYWN0IDYgMgogICAgc3dhcAogICAgY29uY2F0CiAgICBieXRlIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnQgMQogICAgcmV0dXJuCgptYWluX2Rsb2dfcm91dGVAMzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5OjI5CiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBpcyBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5OjcKICAgIC8vIGNsYXNzIEF1ZGl0b3IoQVJDNENvbnRyYWN0KToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGV4dHJhY3QgMiAwCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBleHRyYWN0IDIgMAogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwogICAgZXh0cmFjdCAyIDAKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDQKICAgIGV4dHJhY3QgMiAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weToyOQogICAgLy8gQGFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIGRsb2cKICAgIGJ5dGUgMHgwMAogICAgaW50IDAKICAgIHVuY292ZXIgMgogICAgc2V0Yml0CiAgICBieXRlIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnQgMQogICAgcmV0dXJuCgptYWluX2RsZXFfcm91dGVANDoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5Ojc2CiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBpcyBub3QgY3JlYXRpbmcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5OjcKICAgIC8vIGNsYXNzIEF1ZGl0b3IoQVJDNENvbnRyYWN0KToKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGV4dHJhY3QgMiAwCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAyCiAgICBleHRyYWN0IDIgMAogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwogICAgZXh0cmFjdCAyIDAKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDQKICAgIGV4dHJhY3QgMiAwCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyA1CiAgICBleHRyYWN0IDIgMAogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgNgogICAgZXh0cmFjdCAyIDAKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDcKICAgIGV4dHJhY3QgMiAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weTo3NgogICAgLy8gQGFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIGRsZXEKICAgIGJ5dGUgMHgwMAogICAgaW50IDAKICAgIHVuY292ZXIgMgogICAgc2V0Yml0CiAgICBieXRlIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnQgMQogICAgcmV0dXJuCgptYWluX2JhcmVfcm91dGluZ0A3OgogICAgLy8gc21hcnRfY29udHJhY3RzL2F1ZGl0b3IvY29udHJhY3QucHk6NwogICAgLy8gY2xhc3MgQXVkaXRvcihBUkM0Q29udHJhY3QpOgogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIHJlamVjdCB0cmFuc2FjdGlvbgogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgICEKICAgIGFzc2VydCAvLyBpcyBjcmVhdGluZwogICAgaW50IDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy5hdWRpdG9yLmNvbnRyYWN0LkF1ZGl0b3IuaGVsbG8obmFtZTogYnl0ZXMpIC0+IGJ5dGVzOgpoZWxsbzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5OjgtOQogICAgLy8gQGFiaW1ldGhvZCgpCiAgICAvLyBkZWYgaGVsbG8oc2VsZiwgbmFtZTogU3RyaW5nKSAtPiBTdHJpbmc6CiAgICBwcm90byAxIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5OjEwCiAgICAvLyByZXR1cm4gIkhlbGxvLCAiICsgbmFtZQogICAgYnl0ZSAiSGVsbG8sICIKICAgIGZyYW1lX2RpZyAtMQogICAgY29uY2F0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMuYXVkaXRvci5jb250cmFjdC5BdWRpdG9yLmRsb2coZzogYnl0ZXMsIHg6IGJ5dGVzLCB2OiBieXRlcywgejogYnl0ZXMpIC0+IHVpbnQ2NDoKZGxvZzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5OjI5LTM2CiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIC8vIGRlZiBkbG9nKAogICAgLy8gICAgIHNlbGYsCiAgICAvLyAgICAgZzogQnl0ZXMsCiAgICAvLyAgICAgeDogQnl0ZXMsCiAgICAvLyAgICAgdjogQnl0ZXMsCiAgICAvLyAgICAgejogQnl0ZXMsCiAgICAvLyApIC0+IGJvb2w6CiAgICBwcm90byA0IDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5OjM5CiAgICAvLyBCaWdVSW50LmZyb21fYnl0ZXMoc2hhMjU2KGNvbmNhdChnLCBjb25jYXQoeCwgdikpKSkKICAgIGZyYW1lX2RpZyAtMwogICAgZnJhbWVfZGlnIC0yCiAgICBjb25jYXQKICAgIGZyYW1lX2RpZyAtNAogICAgc3dhcAogICAgY29uY2F0CiAgICBzaGEyNTYKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5OjQwLTQyCiAgICAvLyAlIEJpZ1VJbnQoCiAgICAvLyAgICAgMjE4ODgyNDI4NzE4MzkyNzUyMjIyNDY0MDU3NDUyNTcyNzUwODg2OTYzMTExNTcyOTc4MjM2NjI2ODkwMzc4OTQ2NDUyMjYyMDg1ODMKICAgIC8vICkKICAgIGJ5dGUgMHgzMDY0NGU3MmUxMzFhMDI5Yjg1MDQ1YjY4MTgxNTg1ZDk3ODE2YTkxNjg3MWNhOGQzYzIwOGMxNmQ4N2NmZDQ3CiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weTozOS00MgogICAgLy8gQmlnVUludC5mcm9tX2J5dGVzKHNoYTI1Nihjb25jYXQoZywgY29uY2F0KHgsIHYpKSkpCiAgICAvLyAlIEJpZ1VJbnQoCiAgICAvLyAgICAgMjE4ODgyNDI4NzE4MzkyNzUyMjIyNDY0MDU3NDUyNTcyNzUwODg2OTYzMTExNTcyOTc4MjM2NjI2ODkwMzc4OTQ2NDUyMjYyMDg1ODMKICAgIC8vICkKICAgIGIlCiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weTo0NwogICAgLy8gZWMuc2NhbGFyX211bChFQy5CTjI1NGcxLCBnLCB6KSwKICAgIGZyYW1lX2RpZyAtNAogICAgZnJhbWVfZGlnIC0xCiAgICBlY19zY2FsYXJfbXVsIEJOMjU0ZzEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5OjQ4CiAgICAvLyBlYy5zY2FsYXJfbXVsKEVDLkJOMjU0ZzEsIHgsIGMpLAogICAgZnJhbWVfZGlnIC0zCiAgICB1bmNvdmVyIDIKICAgIGVjX3NjYWxhcl9tdWwgQk4yNTRnMQogICAgLy8gc21hcnRfY29udHJhY3RzL2F1ZGl0b3IvY29udHJhY3QucHk6NDUtNDkKICAgIC8vIGFzc2VydCB2ID09IGVjLmFkZCgKICAgIC8vICAgICBFQy5CTjI1NGcxLAogICAgLy8gICAgIGVjLnNjYWxhcl9tdWwoRUMuQk4yNTRnMSwgZywgeiksCiAgICAvLyAgICAgZWMuc2NhbGFyX211bChFQy5CTjI1NGcxLCB4LCBjKSwKICAgIC8vICkKICAgIGVjX2FkZCBCTjI1NGcxCiAgICBmcmFtZV9kaWcgLTIKICAgID09CiAgICBhc3NlcnQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5OjUxCiAgICAvLyByZXR1cm4gVHJ1ZQogICAgaW50IDEKICAgIHJldHN1YgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy5hdWRpdG9yLmNvbnRyYWN0LkF1ZGl0b3IuZGxlcShnOiBieXRlcywgeDogYnl0ZXMsIGg6IGJ5dGVzLCB5OiBieXRlcywgdjogYnl0ZXMsIHc6IGJ5dGVzLCB6OiBieXRlcykgLT4gdWludDY0OgpkbGVxOgogICAgLy8gc21hcnRfY29udHJhY3RzL2F1ZGl0b3IvY29udHJhY3QucHk6NzYtODYKICAgIC8vIEBhYmltZXRob2QoKQogICAgLy8gZGVmIGRsZXEoCiAgICAvLyAgICAgc2VsZiwKICAgIC8vICAgICBnOiBCeXRlcywKICAgIC8vICAgICB4OiBCeXRlcywKICAgIC8vICAgICBoOiBCeXRlcywKICAgIC8vICAgICB5OiBCeXRlcywKICAgIC8vICAgICB2OiBCeXRlcywKICAgIC8vICAgICB3OiBCeXRlcywKICAgIC8vICAgICB6OiBCeXRlcywKICAgIC8vICkgLT4gYm9vbDoKICAgIHByb3RvIDcgMQogICAgLy8gc21hcnRfY29udHJhY3RzL2F1ZGl0b3IvY29udHJhY3QucHk6OTAKICAgIC8vIEJpZ1VJbnQuZnJvbV9ieXRlcyhzaGEyNTYoY29uY2F0KHgsIGNvbmNhdCh5LCBjb25jYXQodiwgdykpKSkpCiAgICBmcmFtZV9kaWcgLTMKICAgIGZyYW1lX2RpZyAtMgogICAgY29uY2F0CiAgICBmcmFtZV9kaWcgLTQKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZnJhbWVfZGlnIC02CiAgICBzd2FwCiAgICBjb25jYXQKICAgIHNoYTI1NgogICAgLy8gc21hcnRfY29udHJhY3RzL2F1ZGl0b3IvY29udHJhY3QucHk6OTEtOTMKICAgIC8vICUgQmlnVUludCgKICAgIC8vICAgICAyMTg4ODI0Mjg3MTgzOTI3NTIyMjI0NjQwNTc0NTI1NzI3NTA4ODY5NjMxMTE1NzI5NzgyMzY2MjY4OTAzNzg5NDY0NTIyNjIwODU4MwogICAgLy8gKQogICAgYnl0ZSAweDMwNjQ0ZTcyZTEzMWEwMjliODUwNDViNjgxODE1ODVkOTc4MTZhOTE2ODcxY2E4ZDNjMjA4YzE2ZDg3Y2ZkNDcKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hdWRpdG9yL2NvbnRyYWN0LnB5OjkwLTkzCiAgICAvLyBCaWdVSW50LmZyb21fYnl0ZXMoc2hhMjU2KGNvbmNhdCh4LCBjb25jYXQoeSwgY29uY2F0KHYsIHcpKSkpKQogICAgLy8gJSBCaWdVSW50KAogICAgLy8gICAgIDIxODg4MjQyODcxODM5Mjc1MjIyMjQ2NDA1NzQ1MjU3Mjc1MDg4Njk2MzExMTU3Mjk3ODIzNjYyNjg5MDM3ODk0NjQ1MjI2MjA4NTgzCiAgICAvLyApCiAgICBiJQogICAgLy8gc21hcnRfY29udHJhY3RzL2F1ZGl0b3IvY29udHJhY3QucHk6OTgKICAgIC8vIGVjLnNjYWxhcl9tdWwoRUMuQk4yNTRnMSwgZywgeiksCiAgICBmcmFtZV9kaWcgLTcKICAgIGZyYW1lX2RpZyAtMQogICAgZWNfc2NhbGFyX211bCBCTjI1NGcxCiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weTo5OQogICAgLy8gZWMuc2NhbGFyX211bChFQy5CTjI1NGcxLCB4LCBjKSwKICAgIGZyYW1lX2RpZyAtNgogICAgZGlnIDIKICAgIGVjX3NjYWxhcl9tdWwgQk4yNTRnMQogICAgLy8gc21hcnRfY29udHJhY3RzL2F1ZGl0b3IvY29udHJhY3QucHk6OTYtMTAwCiAgICAvLyBhc3NlcnQgdiA9PSBlYy5hZGQoCiAgICAvLyAgICAgRUMuQk4yNTRnMSwKICAgIC8vICAgICBlYy5zY2FsYXJfbXVsKEVDLkJOMjU0ZzEsIGcsIHopLAogICAgLy8gICAgIGVjLnNjYWxhcl9tdWwoRUMuQk4yNTRnMSwgeCwgYyksCiAgICAvLyApCiAgICBlY19hZGQgQk4yNTRnMQogICAgZnJhbWVfZGlnIC0zCiAgICA9PQogICAgYXNzZXJ0CiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weToxMDMKICAgIC8vIGVjLnNjYWxhcl9tdWwoRUMuQk4yNTRnMSwgaCwgeiksCiAgICBmcmFtZV9kaWcgLTUKICAgIGZyYW1lX2RpZyAtMQogICAgZWNfc2NhbGFyX211bCBCTjI1NGcxCiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weToxMDQKICAgIC8vIGVjLnNjYWxhcl9tdWwoRUMuQk4yNTRnMSwgeSwgYyksCiAgICBmcmFtZV9kaWcgLTQKICAgIHVuY292ZXIgMgogICAgZWNfc2NhbGFyX211bCBCTjI1NGcxCiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weToxMDEtMTA1CiAgICAvLyBhc3NlcnQgdyA9PSBlYy5hZGQoCiAgICAvLyAgICAgRUMuQk4yNTRnMSwKICAgIC8vICAgICBlYy5zY2FsYXJfbXVsKEVDLkJOMjU0ZzEsIGgsIHopLAogICAgLy8gICAgIGVjLnNjYWxhcl9tdWwoRUMuQk4yNTRnMSwgeSwgYyksCiAgICAvLyApCiAgICBlY19hZGQgQk4yNTRnMQogICAgZnJhbWVfZGlnIC0yCiAgICA9PQogICAgYXNzZXJ0CiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weToxMDYKICAgIC8vIHJldHVybiBUcnVlCiAgICBpbnQgMQogICAgcmV0c3ViCg==",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDEwCgpzbWFydF9jb250cmFjdHMuYXVkaXRvci5jb250cmFjdC5BdWRpdG9yLmNsZWFyX3N0YXRlX3Byb2dyYW06CiAgICAvLyBzbWFydF9jb250cmFjdHMvYXVkaXRvci9jb250cmFjdC5weTo3CiAgICAvLyBjbGFzcyBBdWRpdG9yKEFSQzRDb250cmFjdCk6CiAgICBpbnQgMQogICAgcmV0dXJuCg=="
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "schema": {
    "global": {
      "declared": {},
      "reserved": {}
    },
    "local": {
      "declared": {},
      "reserved": {}
    }
  },
  "contract": {
    "name": "Auditor",
    "methods": [
      {
        "name": "hello",
        "args": [
          {
            "type": "string",
            "name": "name"
          }
        ],
        "returns": {
          "type": "string"
        }
      },
      {
        "name": "dlog",
        "args": [
          {
            "type": "byte[]",
            "name": "g"
          },
          {
            "type": "byte[]",
            "name": "x"
          },
          {
            "type": "byte[]",
            "name": "v"
          },
          {
            "type": "byte[]",
            "name": "z"
          }
        ],
        "returns": {
          "type": "bool"
        }
      },
      {
        "name": "dleq",
        "args": [
          {
            "type": "byte[]",
            "name": "g"
          },
          {
            "type": "byte[]",
            "name": "x"
          },
          {
            "type": "byte[]",
            "name": "h"
          },
          {
            "type": "byte[]",
            "name": "y"
          },
          {
            "type": "byte[]",
            "name": "v"
          },
          {
            "type": "byte[]",
            "name": "w"
          },
          {
            "type": "byte[]",
            "name": "z"
          }
        ],
        "returns": {
          "type": "bool"
        }
      }
    ],
    "networks": {}
  },
  "bare_call_config": {
    "no_op": "CREATE"
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt.
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

export type AppCreateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult> & AppReference
export type AppUpdateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult>

export type AppClientComposeCallCoreParams = Omit<AppClientCallCoreParams, 'sendParams'> & {
  sendParams?: Omit<SendTransactionParams, 'skipSending' | 'atc' | 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources'>
}
export type AppClientComposeExecuteParams = Pick<SendTransactionParams, 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources' | 'suppressLog'>

export type IncludeSchema = {
  /**
   * Any overrides for the storage schema to request for the created app; by default the schema indicated by the app spec is used.
   */
  schema?: Partial<AppStorageSchema>
}

/**
 * Defines the types of available calls and state of the Auditor smart contract.
 */
export type Auditor = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'hello(string)string' | 'hello', {
      argsObj: {
        name: string
      }
      argsTuple: [name: string]
      returns: string
    }>
    & Record<'dlog(byte[],byte[],byte[],byte[])bool' | 'dlog', {
      argsObj: {
        g: Uint8Array
        x: Uint8Array
        v: Uint8Array
        z: Uint8Array
      }
      argsTuple: [g: Uint8Array, x: Uint8Array, v: Uint8Array, z: Uint8Array]
      returns: boolean
    }>
    & Record<'dleq(byte[],byte[],byte[],byte[],byte[],byte[],byte[])bool' | 'dleq', {
      argsObj: {
        g: Uint8Array
        x: Uint8Array
        h: Uint8Array
        y: Uint8Array
        v: Uint8Array
        w: Uint8Array
        z: Uint8Array
      }
      argsTuple: [g: Uint8Array, x: Uint8Array, h: Uint8Array, y: Uint8Array, v: Uint8Array, w: Uint8Array, z: Uint8Array]
      returns: boolean
    }>
}
/**
 * Defines the possible abi call signatures
 */
export type AuditorSig = keyof Auditor['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends AuditorSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the Auditor smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends AuditorSig> = Auditor['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the Auditor smart contract to the method's return type
 */
export type MethodReturn<TSignature extends AuditorSig> = Auditor['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type AuditorCreateCalls = (typeof AuditorCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type AuditorCreateCallParams =
  | (TypedCallParams<undefined> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type AuditorDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: AuditorCreateCalls) => AuditorCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class AuditorCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the Auditor smart contract using a bare call
       *
       * @param params Any parameters for the call
       * @returns A TypedCallParams object for the call
       */
      bare(params: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: undefined,
          methodArgs: undefined,
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the hello(string)string ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static hello(args: MethodArgs<'hello(string)string'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'hello(string)string' as const,
      methodArgs: Array.isArray(args) ? args : [args.name],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the dlog(byte[],byte[],byte[],byte[])bool ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static dlog(args: MethodArgs<'dlog(byte[],byte[],byte[],byte[])bool'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'dlog(byte[],byte[],byte[],byte[])bool' as const,
      methodArgs: Array.isArray(args) ? args : [args.g, args.x, args.v, args.z],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the dleq(byte[],byte[],byte[],byte[],byte[],byte[],byte[])bool ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static dleq(args: MethodArgs<'dleq(byte[],byte[],byte[],byte[],byte[],byte[],byte[])bool'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'dleq(byte[],byte[],byte[],byte[],byte[],byte[],byte[])bool' as const,
      methodArgs: Array.isArray(args) ? args : [args.g, args.x, args.h, args.y, args.v, args.w, args.z],
      ...params,
    }
  }
}

/**
 * A client to make calls to the Auditor smart contract
 */
export class AuditorClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `AuditorClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue } as AppCallTransactionResultOfType<TReturn> & TResult
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof Auditor['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the Auditor smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: AuditorDeployArgs & AppClientDeployCoreParams & IncludeSchema = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(AuditorCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the Auditor smart contract using a bare call.
       *
       * @param args The arguments for the bare call
       * @returns The create result
       */
      async bare(args: BareCallArgs & AppClientCallCoreParams & AppClientCompilationParams & IncludeSchema & CoreAppCallArgs & (OnCompleteNoOp) = {}) {
        return $this.mapReturnValue<undefined, AppCreateCallTransactionResult>(await $this.appClient.create(args))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the Auditor smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the hello(string)string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public hello(args: MethodArgs<'hello(string)string'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(AuditorCallFactory.hello(args, params))
  }

  /**
   * Calls the dlog(byte[],byte[],byte[],byte[])bool ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public dlog(args: MethodArgs<'dlog(byte[],byte[],byte[],byte[])bool'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(AuditorCallFactory.dlog(args, params))
  }

  /**
   * Calls the dleq(byte[],byte[],byte[],byte[],byte[],byte[],byte[])bool ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public dleq(args: MethodArgs<'dleq(byte[],byte[],byte[],byte[],byte[],byte[],byte[])bool'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(AuditorCallFactory.dleq(args, params))
  }

  public compose(): AuditorComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      hello(args: MethodArgs<'hello(string)string'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.hello(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      dlog(args: MethodArgs<'dlog(byte[],byte[],byte[],byte[])bool'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.dlog(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      dleq(args: MethodArgs<'dleq(byte[],byte[],byte[],byte[],byte[],byte[],byte[])bool'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.dleq(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await atc.simulate(client.algod, new modelsv2.SimulateRequest({ txnGroups: [], ...options }))
        return {
          ...result,
          returns: result.methodResults?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      },
      async execute(sendParams?: AppClientComposeExecuteParams) {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as AuditorComposer
  }
}
export type AuditorComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the hello(string)string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  hello(args: MethodArgs<'hello(string)string'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): AuditorComposer<[...TReturns, MethodReturn<'hello(string)string'>]>

  /**
   * Calls the dlog(byte[],byte[],byte[],byte[])bool ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  dlog(args: MethodArgs<'dlog(byte[],byte[],byte[],byte[])bool'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): AuditorComposer<[...TReturns, MethodReturn<'dlog(byte[],byte[],byte[],byte[])bool'>]>

  /**
   * Calls the dleq(byte[],byte[],byte[],byte[],byte[],byte[],byte[])bool ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  dleq(args: MethodArgs<'dleq(byte[],byte[],byte[],byte[],byte[],byte[],byte[])bool'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): AuditorComposer<[...TReturns, MethodReturn<'dleq(byte[],byte[],byte[],byte[],byte[],byte[],byte[])bool'>]>

  /**
   * Makes a clear_state call to an existing instance of the Auditor smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs): AuditorComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): AuditorComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<AuditorComposerSimulateResult<TReturns>>
  /**
   * Executes the transaction group and returns the results
   */
  execute(sendParams?: AppClientComposeExecuteParams): Promise<AuditorComposerResults<TReturns>>
}
export type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>
export type AuditorComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns
  methodResults: ABIResult[]
  simulateResponse: modelsv2.SimulateResponse
}
export type AuditorComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
