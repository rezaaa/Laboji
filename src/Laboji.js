import sketch from 'sketch'
const document = sketch.getSelectedDocument();

const addLabel = (layer, emoji) => {
  const emojiRegex = /[\uD800-\uDFFF]./.test(layer.name);
  layer.name = emojiRegex ? layer.name.replace(/[\uD800-\uDFFF]./g, emoji) : `${emoji} ${layer.name}`;
}

const labeloji = (emoji) => {  
  const selectedLayers = document.selectedLayers;
  const selectedCount = selectedLayers.length;
  if (selectedCount !== 0) {
    selectedLayers.map(item => {
      addLabel(item, emoji);
    });
  }
  else {
    sketch.UI.message('Select a layer or group');
  }
}

const labels = ['🦄', '🐶', '🦋', '🐼', '🐝', '🐵', '🐸', '🐰', '🐬', '🐑', '🐓', '🍆', '🍏', '🍎', '🍉', '🍔', '🍑'];

const randomLabel = () => {
  const randomLabel = labels[Math.floor(Math.random()*labels.length)];
  labeloji(randomLabel);
}

const unicornLabel = () => {
  labeloji(labels[0]);
}

const dogLabel = () => {
  labeloji(labels[1]);
}

const butterflyLabel = () => {
  labeloji(labels[2]);
}

const pandaLabel = () => {
  labeloji(labels[3]);
}

export {randomLabel, unicornLabel, dogLabel, butterflyLabel, pandaLabel, ramoveLabel};