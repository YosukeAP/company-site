// src/lib/sanityClient.ts
import {createClient} from '@sanity/client'

export const sanity = createClient({
  projectId: 'vdcrzio7',          // ← あなたの projectId のまま
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})
