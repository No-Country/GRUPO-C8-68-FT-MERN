import FadeLoader from 'react-spinners/FadeLoader'

export const Spinner = () => {
    return ( 
        <FadeLoader
          color="#36d7b7"
          cssOverride={{ margin: "100px auto" }}
          size={150}
        />
     );
}