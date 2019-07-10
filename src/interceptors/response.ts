export default (data: any) => {
  if (data.result) {
    return data.result
  }
  return data
}
