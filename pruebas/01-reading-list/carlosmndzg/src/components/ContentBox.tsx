interface Props {
  children: React.ReactNode
}

const ContentBox: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex gap-12 justify-between items-center w-full max-w-7xl mx-auto px-4">
      {children}
    </div>
  )
}

export default ContentBox
