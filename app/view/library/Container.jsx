export default function Container({ children, ...nextProps }) {
    return <div className='min-h-screen bg-gray-100 flex flex-col items-center py-10' {...nextProps}>{children}</div>
}