/*
 * from @wharfkit/session/test/utils
 * Copyright (c) 2023 Greymass Inc. All Rights Reserved.
 * Copyright 2023 EOS Network Foundation
 */

import {SessionStorage} from '@wharfkit/session'

export class MockStorage implements SessionStorage {
    data: Record<string, string> = {}
    async write(key: string, data: string): Promise<void> {
        this.data[key] = data
    }
    async read(key: string): Promise<string | null> {
        return this.data[key]
    }
    async remove(key: string): Promise<void> {
        delete this.data[key]
    }
    storageKey(key: string) {
        return `mock-${key}`
    }
}
