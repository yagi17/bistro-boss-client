

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-5/12 uppercase text-xs text-center mx-auto my-8">
            <h3 className="text-yellow-600 mb-2 ">---{subHeading}---</h3>
            <p className="text-3xl py-2 uppercase border-y-2">{heading}</p>
        </div>
    );
};

export default SectionTitle;