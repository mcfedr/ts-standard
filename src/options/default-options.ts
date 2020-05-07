import { join } from 'path'
import { statSync } from 'fs'

export const DEFAULT_TSCONFIG_LOCATIONS = [
  'tsconfig.eslint.json',
  'tsconfig.json'
]

const DEFAULT_PATTERNS = [
  '**/*.js',
  '**/*.jsx',
  '**/*.mjs',
  '**/*.cjs',
  '**/*.ts',
  '**/*.tsx'
]

export interface DefaultOptions {
  files: string[]
  fix: boolean
  report: string
  useStdIn: boolean
  noDefaultIgnore: boolean
  eslint: undefined
  cwd: string
  project?: string
  ignore?: string[]
  envs?: string[]
  globals?: string[]
  plugins?: string[]
  parser?: string
}

export function getDefaultOptions (cwd: string = process.cwd()): DefaultOptions {
  return {
    files: DEFAULT_PATTERNS,
    project: _getTSConfigFromDefaultLocations(cwd),
    fix: false,
    report: 'standard',
    useStdIn: false,
    noDefaultIgnore: false,
    cwd,
    eslint: undefined,
    ignore: undefined,
    envs: undefined,
    globals: undefined,
    plugins: undefined,
    parser: undefined
  }
}

export function _getTSConfigFromDefaultLocations (cwd: string): string | undefined {
  for (const tsFile of DEFAULT_TSCONFIG_LOCATIONS) {
    const absPath = join(cwd, tsFile)
    if (exports._isValidPath(absPath) as boolean) {
      return absPath
    }
  }
}

export function _isValidPath (pathToValidate: string): boolean {
  try {
    statSync(pathToValidate)
  } catch (e) {
    return false
  }
  return true
}