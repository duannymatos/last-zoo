const TitleCase = (props) => {

    const name = props.content;


    return (
        name.charAt(0).toUpperCase() + name.slice(1)

    );
};

export default TitleCase;