interface Props {
    title?: string;
}

export const ProjectType = ({ title }: Props) => {
    return (
        <div className="w-[270px] bg-white dark:bg-[#202020] rounded-xl relative">
            <img src="/home/banner.jpg" alt="service" className="rounded-lg aspect-square h-[258px] object-cover bg-dark" />
            {title && <p className="font-semibold mt-5 text-white dark:text-white absolute top-2 left-6 text-sm md:text-xl">{title}</p>}
        </div>
    );
};
