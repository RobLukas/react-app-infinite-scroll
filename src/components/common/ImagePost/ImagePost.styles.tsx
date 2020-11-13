import styled from 'styled-components';
import CardImg from 'react-bootstrap/CardImg';

const Img = styled(CardImg)`
  &:hover {
    opacity: 0.6;
    transition-duration: 0.3s;
  }
`;

const ImagePostStyles = { Img };

export default ImagePostStyles;
