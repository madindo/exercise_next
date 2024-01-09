'use client';
import { useRef, useState } from "react";
import classes from "./image-picker.module.css"
import Image from "next/image";
export default function ImagePicker({label, name}) {
  const imageInputRef = useRef();
  const [pickedImage,setPickedImage] = useState();
  function handlePickClick() {
    imageInputRef.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    }
    fileReader.readAsDataURL(file);
  }
  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.control}>
      <div className={classes.preview}>
        {!pickedImage && <p>No Image Picked Yet</p>}
        { pickedImage && (
          <Image src={pickedImage} alt="The Image selected by user" fill />
        )}
      </div>
      <input type="file" className={classes.input} id="image" accept="image/png, image/jpeg" name={name} ref={imageInputRef} onChange={handleImageChange} />
      <button className={classes.button}  onClick={handlePickClick} type="button">
        Pick an Image
      </button>
    </div>
  </div>;
}