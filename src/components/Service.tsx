interface Props {
    title: string;
    description: string;
    image: string;
}

export const Service = ({ title, description, image }: Props) => {
    return (
        <div className="w-[270px] bg-white dark:bg-[#202020] shadow rounded-xl p-3">
            <img
                src={image}
                alt="service"
                className="rounded-lg aspect-square h-[258px] object-cover"
            />
            <p className="font-semibold mt-5 text-black dark:text-white">{title}</p>
            <p className="opacity-70 text-sm text-black dark:text-white">{description}</p>
        </div>
    );
};
