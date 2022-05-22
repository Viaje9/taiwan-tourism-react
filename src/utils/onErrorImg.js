import errorImg from '/src/assets/images/empty.svg'
import { useCallback, useRef } from 'react'

function setErrorImg(el) {
  el.src = errorImg
  el.style.border = '1px solid'
  el.style.borderColor = '#E1E1E1'
}

function setErrorBgImg(el) {
  el.style.backgroundImage = `url(${errorImg})`
  el.style.backgroundPosition = 'center'
  el.style.backgroundSize = 'contain'
  el.style.backgroundRepeat = 'no-repeat'
}

export const imgSrc = (src) => {
  return useCallback((imgRef) => {
    if (src && imgRef) {
      const img = new Image()
      img.src = src

      img.onload = () => {
        imgRef.src = src
      }
      img.onerror = () => setErrorImg(imgRef)
    }

    if (!src && imgRef) {
      setErrorImg(imgRef)
    }
  }, [])
}

export const bgImgSrc = (src) => {
  return useCallback((imgRef) => {
    if (src && imgRef) {
      const img = new Image()
      img.src = src

      img.onload = () => {
        if (imgRef) {
          imgRef.style.backgroundImage = `url(${src})`
        }
      }
      img.onerror = () => setErrorBgImg(imgRef)
    }

    if (!src && imgRef) {
      setErrorBgImg(imgRef)
    }
  }, [])
}
