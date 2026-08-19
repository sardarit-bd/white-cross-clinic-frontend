const TopServicesItemBanner = ({ children }) => {
    return (
        <section className='bg-[#d6cece] h-[240px] flex flex-col items-center justify-center text-blue-800/360 font-semibold'>
            <h2 className='text-5xl text-center'>{children}</h2>
        </section>
    )
}

export default TopServicesItemBanner;