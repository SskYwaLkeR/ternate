export default function ternate(statement, firstF, secondF) {
    if (statement === true) {
      if (typeof firstF === 'function') {
        return firstF();
      } else {
        return firstF;
      }
    } else {
      if (typeof secondF === 'function') {
        return secondF();
      } else {
        return secondF;
      }
    }
  }