import validationService from "../Validation/ValidationService";

export const notesValidation = (dto) => {
  const { noteId, userId, title, description } = dto;
  const Title = !validationService.checkEmpty(title);
  const Description = !validationService.checkEmpty(description);
  
  const titleLength = !validationService.validateLength(title, 5, 40);
  const descriptionLength = !validationService.validateLength(description,5, 200);

  if (Title && Description) {
    if (titleLength && descriptionLength) {
      return true;
    } else {
      return { status: 400, message: "Please Enter Valid Lengths" };
    }
  } else {
    return { status: 400, message: "Please Enter All Values" };
  }

};
