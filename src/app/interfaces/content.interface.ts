export interface ApiResponse {
  path: string,
  content: Content
}

export interface Content {
  files: string[],
  directories: string[],
}