import validationService from "../Validation/ValidationService"; 
export const projectValidation=(dto)=>{
  const {projId,userId,name,description}=dto;
  const Name = !validationService.checkEmpty(name);
  const Description = !validationService.checkEmpty(description);

  const NameLength = !validationService.validateLength(name, 5, 40);
  const DescriptionLength = !validationService.validateLength(description, 5, 150);

  if ((Name && Description)) {
    if ((NameLength && DescriptionLength)) {
      return true;
    } else {
      return {status: 400, message: "Please Enter Valid Lengths"};
    }
  } else {
    return {status: 400, message: "Please Enter All Values"};
  }
};
