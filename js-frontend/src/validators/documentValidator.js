import compact from '../utils/compact'


export default function documentValidator(data) {
  return compact({
    titleExists:
      !data.title &&
      "You must specify a title for your document",
  })
}
