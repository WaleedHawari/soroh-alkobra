interface Props {
    image: string;
    title?: string;
}

export const Project = ({ image, title }: Props) => {
    return (
        <div className="w-[270px] bg-white dark:bg-[#202020] shadow rounded-xl p-3">
            <img src={image} alt="service" className="rounded-lg aspect-square h-[258px] object-cover" />
            {title && <p className="font-semibold mt-5 text-black dark:text-white">{title}</p>}
        </div>
    );
};
