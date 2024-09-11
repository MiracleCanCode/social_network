import { cn } from '@/lib/utils'
import { memo } from 'react'
import { useTheme } from '../ThemeProvider/ThemeProvider'
import styles from './Title.module.css'

type tags = 'h1' | 'h2' | 'h3' | 'h4' | 'p'

interface Props {
  tag: tags
  className?: string
  children: any
}

export const Title = memo(({ tag, className, children }: Props) => {
  const Tag = tag
  return (
    <Tag
      className={cn(
        styles[Tag],
        className,
      )}
    >
      {children}
    </Tag>
  )
})
