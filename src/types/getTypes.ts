export interface WeatherObject {
    base: string
    clouds: IClouds
    cod: number
    coord: ICoord
    dt: number
    id: number
    main: IMain
    name: string
    sys: ISys
    timezone: number
    visibility: number
    weather: IWeather[]
    wind: IWind
}

export interface IClouds {
    all: number
}

export interface ICoord {
    lon: number
    lat: number
}

export interface IMain {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}

export interface ISys {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
}

export interface IWeather {
    id: number
    main: string
    description: string
    icon: string
}

export interface IWind {
    speed: number
    deg: number,
    gust: number,
}

export const weatherTemplateObj: WeatherObject = {
    base: '',
    clouds: { all: 0 },
    cod: 0,
    coord: {
        lon: 0,
        lat: 0,
    },
    dt: 0,
    id: 0,
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
    },
    name: '',
    sys: {
        type: 0,
        id: 0,
        country: '',
        sunrise: 0,
        sunset: 0
    },
    timezone: 0,
    visibility: 0,
    weather: [{
        description: '',
        icon: '',
        id: 0,
        main: '',
    }],
    wind: {
        speed: 0,
        deg: 0,
        gust: 0,
    }
}

export interface NasaApodTemplate {
    date: string
    explanation: string
    hdurl: string
    media_type: string
    title: string
    url: string
}

export const NasaApodObj: NasaApodTemplate = {
    date: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    title: '',
    url: '',
}

export interface ImageTemplate {
    alt_description: string | null
    description: string
    id: string
    links: ILinks
    urls: IUrls
    user: IUser
}

export interface ILinks {
    download: string
    download_location: string
    html: string
    self: string
}
export interface IUrls {
    full: string
    raw: string
    regular: string
    small: string
    small_s3: string
    trumb: string
}

export interface IUser {
    first_name: string
    last_name: string
}

export const ImageTemplateObj:ImageTemplate = {
    alt_description: '',
    description: '',
    id: '',
    links: {
        download: '',
        download_location: '',
        html: '',
        self: '',
    },
    urls: {
        full: '',
        raw: '',
        regular: '',
        small: '',
        small_s3: '',
        trumb: '',
    },
    user: {
        first_name: '',
        last_name: '',
    }
}