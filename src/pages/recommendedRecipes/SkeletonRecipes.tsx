import styled, { keyframes } from 'styled-components';

const SkeletonRecipes = () => {
    return (
        <SkeletonRecipesList>
            {[...Array(3)].map((_, index) => (
                <SkeletonRecipe key={index}>
                    <SkeletonRecipeImg />
                    <SkeletonRecipeInfo>
                        <SkeletonRecipeTitle />
                        <SkeletonRecipeDescription />
                    </SkeletonRecipeInfo>
                </SkeletonRecipe>
            ))}
        </SkeletonRecipesList>
    )
}
export default SkeletonRecipes;

const SkeletonRecipesList = styled.div`
`;

const fadeIn = keyframes`
    from {
        opacity: 0.5;
    }
    to {
        opacity: 1;
    }
`;

const SkeletonRecipe = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
    animation: ${fadeIn} 0.9s infinite alternate;
`;

const SkeletonRecipeImg = styled.div`
    width: 12rem;
    height: 9rem;
    background-color: #ccc;
    border-radius: 0.8rem;
`;

const SkeletonRecipeInfo = styled.div`
    flex: 1;
    margin-left: 1.5rem;
`;

const SkeletonRecipeTitle = styled.div`
    width: 70%;
    height: 1.5rem;
    background-color: #ccc;
    margin-bottom: 0.5rem;
`;

const SkeletonRecipeDescription = styled.div`
    width: 100%;
    height: 1rem;
    background-color: #ccc;
`;

