import c from './grid.module.scss'

interface IBaseGridProps{
  style?: React.CSSProperties
  className?: string
  children?: React.ReactNode
}

interface IContainerProps extends IBaseGridProps{
}
const Container = ({ ...props}:IContainerProps)=> (
  <div className={c.Container} {...props}></div>
)

interface IRowProps extends IBaseGridProps{
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  spacing?: number
}
const Row = ({justifyContent, spacing=0, style={}, ...props}:IRowProps)=> (
  <div
    className={c.Row}
    style={{...style, justifyContent, gap: spacing }}
    {...props}
  />
)

interface IColumnProps extends IBaseGridProps{}
const Column = ({...props}:IColumnProps)=> (
  <div className={c.Column} {...props}></div>
)

export {
  Container,
  Row,
  Column
}
