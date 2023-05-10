import { Blocks } from 'react-loader-spinner';
import { StyledContentLoader } from './ContentLoader.styled';

const ContentLoader = () => {
  return (
    <StyledContentLoader>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </StyledContentLoader>
  );
};

export default ContentLoader;
