module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupFilesAfterEnv.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf|svg|avif)$': '<rootDir>/jest/moduleMapper/fileMock.js',
    '@/assets/(.*)': '<rootDir>/src/assets/$1',
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/constants/(.*)': '<rootDir>/src/constants/$1',
    '@/design-tokens/(.*)': '<rootDir>/src/design-tokens/build/$1',
    '@/hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@/pages/(.*)': '<rootDir>/src/pages/$1',
    '@/types/(.*)': '<rootDir>/src/types/$1',
    '@/store/(.*)': '<rootDir>/src/store/$1',
    '@/styles/(.*)': '<rootDir>/src/styles/$1',
  }
}