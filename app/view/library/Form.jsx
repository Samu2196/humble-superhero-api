export default function Form({ children, ...nextProps }) {
    return <form className='bg-white shadow-md rounded-lg p-6 w-96 space-y-4' {...nextProps}>{children}</form>
}