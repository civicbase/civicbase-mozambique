const autoSave = (values: any) => {
  localStorage.setItem('civicbase_form', JSON.stringify(values))
}

export default autoSave
