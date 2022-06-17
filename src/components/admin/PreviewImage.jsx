import React from 'react'
import Wrapper from '../UI/Wrapper';

const PreviewImage = (props) => {
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(null);

  const reader = new FileReader();
   reader.readAsDataURL(props.file);
    reader.onload = () => {
      setImagePreviewUrl(reader.result);
    };
  return (
    <Wrapper className={props.className}>
      <img src={imagePreviewUrl} alt="preview" className={`object-cover object-center mx-auto h-full block`}/>
    </Wrapper>
  )
}

export default PreviewImage