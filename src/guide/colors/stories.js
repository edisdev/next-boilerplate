import colors from '@/assets/stylesheets/modules/colors.module.scss';

export default {
  title: 'Guides'
};


const AllColors = () => {
  return Object.keys(colors).map((color, index) => {
    let style = {
      backgroundColor: colors[color],
      width: 40,
      height: 40,
      borderRadius: '100%',
      marginLeft: "10px"
    }
    return <span key={index} style={style}></span>
  })
}

export const Colors = () => {
  return (
    <div className="flex">
      <AllColors/>
    </div>
  )
}