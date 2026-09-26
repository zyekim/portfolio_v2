import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const testDirectory = dirname(fileURLToPath(import.meta.url))
const projects = JSON.parse(
  readFileSync(join(testDirectory, '../src/json/fe_project.json'), 'utf8'),
)

test('Kose SI와 SCM 통합 패키지를 별도 프로젝트로 소개한다', () => {
  const kose = projects.find((project) => project.title.includes('Kose Korea'))
  const scmPackage = projects.find((project) => project.title.includes('SCM 통합 패키지'))

  assert.ok(kose)
  assert.ok(scmPackage)
  assert.notEqual(kose.id, scmPackage.id)
  assert.match(scmPackage.desc.join(' '), /AI Agent 개발 하네스/)
  assert.match(scmPackage.desc.join(' '), /한국어·영어 Language Pack/)
})
