export const Wrapper = ({children}) => {
    return (
        <div style={{
            display: 'flex',
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            minHeight: 100
        }}>
            {children}
        </div>
    )
}