declare type Fetch = {
  [K in keyof IResponseTypes]: (req?: IModels[K]['Req'], extra?: IExtra) => Promise<IResponseTypes[K]>
}
