export default function Button({ children, ...nextProps }) {
    return <button type='submit' 
    className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'
    {...nextProps}>{children}</button>
}