import { CategoriesContainer, GameDetailCategoriesContainer, GameReleaseDate } from "./styles";

export const GameDetailCategories = ({release, categories=[]}) => {
   
    return ( 
    <GameDetailCategoriesContainer>
        <p className="title-categories">Categories</p>
            <CategoriesContainer>
                {categories.map(item=> (<li key={item}><p>{item}</p></li> ))}
            </CategoriesContainer>
        <p className="title-categories">Release date:</p>
        <GameReleaseDate>{release}</GameReleaseDate>
    </GameDetailCategoriesContainer>
    );
}