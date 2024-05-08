import { clsx, type ClassValue } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 8-character random string
export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  8
)

// Message id
export const messageId = () => nanoid(6)

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export function formatString(
  formatString: string,
  args: Record<string, any>
): string {
  let formattedString = formatString

  for (const name in args) {
    const placeholder = `{${name}}`
    const value = args[name]

    formattedString = formattedString.replace(placeholder, value)
  }

  return formattedString
}



export function getMediaTypeFromDataURL(dataURL: string): string | null {
  const matches = dataURL.match(/^data:([A-Za-z-+\/]+);base64/)
  return matches ? matches[1] : null
}

export function getBase64FromDataURL(dataURL: string): string | null {
  const matches = dataURL.match(/^data:[A-Za-z-+\/]+;base64,(.*)$/)
  return matches ? matches[1] : null
}