<template>
  <div>
    <svgicon
    :name="name"
    :width="widthIcon"
    :height="heightIcon"
    :color="colorIcon"
  />
  {{ name }}
  </div>
</template>
<script>
import '@/plugins/vue-svgicon';
import icons from './data/name.json';
import colors from './data/colors';

export default {
  name: 'BlIconAv',
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return icons.indexOf(value) >= 0;
      },
    },
    color: {
      type: String,
      default: 'active',
    },
  },
  data() {
    return {
      widthIcon: '',
      heightIcon: '',
      colorIcon: '',
    };
  },
  methods: {
    rgbToHex(value) {
      let colorFix;
      if (!value.includes('#')) {
        const rgb = value.replace(/\s/g, '').match(/^rgb?\((\d+),(\d+),(\d+)/i);
        const r = (0 + parseInt(rgb[1], 10).toString(16)).slice(-2);
        const g = (0 + parseInt(rgb[2], 10).toString(16)).slice(-2);
        const b = (0 + parseInt(rgb[3], 10).toString(16)).slice(-2);
        colorFix = (rgb && rgb.length === 4) ? `#${r}${g}${b}` : value;
      } else {
        colorFix = value;
      }
      return colorFix;
    },
  },
  created() {
    if (icons.indexOf(this.name) >= 0) {
      import(`./icons/${this.name}`);
      if (this.name.indexOf('_minor') >= 0) {
        this.widthIcon = '20';
        this.heightIcon = '20';
      } else {
        this.widthIcon = '24';
        this.heightIcon = '24';
      }
      if (colors[this.color]) {
        this.colorIcon = this.rgbToHex(colors[this.color]);
      } else {
        console.error('icon color undefined, please check documentation on https://bukalapak.github.io/catalyst-mweb/');
        const activeColor = 'active';
        this.colorIcon = colors[activeColor];
      }
    } else {
      console.error('icon name undefined, please check documentation on https://bukalapak.github.io/catalyst-mweb/');
    }
  },
};
</script>
