import { ui, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { ChevronIcon, CloseIcon } from '@yamada-ui/icon'
import { cx, getValidChildren, isValidElement } from '@yamada-ui/utils'
import { cloneElement, FC } from 'react'
import { useSelectContext } from './use-select'

export type SelectIconProps = HTMLUIProps<'div'>

export const SelectIcon: FC<SelectIconProps> = ({
  className,
  pointerEvents = 'none',
  children,
  ...rest
}) => {
  const { styles } = useSelectContext()

  const css: CSSUIObject = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents,
    cursor: 'pointer',
    ...styles.icon,
  }

  const validChildren = getValidChildren(children)

  const cloneChildren = validChildren.map((child) =>
    cloneElement(child, {
      focusable: false,
      'aria-hidden': true,
      style: {
        maxWidth: '1em',
        maxHeight: '1em',
        color: 'currentColor',
      },
    }),
  )

  return (
    <ui.div className={cx('ui-select-icon', className)} __css={css} {...rest}>
      {isValidElement(children) ? cloneChildren : <ChevronIcon />}
    </ui.div>
  )
}

export const SelectClearIcon: FC<SelectIconProps> = ({ className, children, ...rest }) => {
  return (
    <SelectIcon className={cx('ui-select-clear-icon', className)} {...rest} pointerEvents='auto'>
      {children ?? <CloseIcon w='0.5em' h='0.5em' />}
    </SelectIcon>
  )
}