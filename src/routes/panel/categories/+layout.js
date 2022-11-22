export const load = ({route}) => {
    let path = route.id.split('/')[3]
    
    if(!path) path = 'index';

    return {
        path
    }
}