'use client'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'

export const Select = (
  {
    children,
    label,
    onChange,
    id,
    name,
  }: PropsWithChildren & {
    label?: string,
    onChange?(value: string): void,
    name?: string,
    id?: string
  }) => {
  const [LabelInitial, setLabelInitial] = useState<{ __html: string | TrustedHTML; } | undefined>()
  const [value, setValue] = useState<string>()
  const [isOpen, setIsOpen] = useState(false)
  const useRefSelect = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (label) setLabelInitial({ __html: label })
  }, [label])

  useEffect(() => {
    if (onChange && value) onChange(value)
  }, [value])

  useEffect(() => {
    if (useRefSelect && isOpen) {
      const menuItems = useRefSelect.current?.querySelectorAll('[data-item=\'menu-item\']')
      const select = useRefSelect.current?.getElementsByTagName('select')
      if (select?.[0]) select[0].setAttribute('value', '')
      menuItems?.forEach((item) => {
        if (item instanceof HTMLElement) {
          item.addEventListener('click', () => {
            setLabelInitial({ __html: item.innerHTML })
            setValue(item.dataset.value)
            setIsOpen(false)
          })
        }
      }
      )
    }
  }, [isOpen])

  function handleBlur() {
    if (isOpen) setIsOpen(false)
  }

  return (
    <div tabIndex={1} onBlur={handleBlur} onClick={() => setIsOpen(true)} ref={useRefSelect} className="flex flex-col relative bg-brand-white border-neutral-100 border py-2 px-4 rounded-lg w-full cursor-default">
      <select name={name} id={id} value={value} className="hidden"><option value={value} /></select>
      <div className="flex items-center justify-between ">
        <div dangerouslySetInnerHTML={LabelInitial} className="flex items-center gap-2" />
        {/* {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} */}
      </div>
      {
        isOpen && <div className="flex flex-col absolute bottom-0 translate-y-full left-0 w-full z-50 border rounded-md" onClick={evt => evt.stopPropagation()}>
          {children}
        </div>
      }
    </div>
  )
}
