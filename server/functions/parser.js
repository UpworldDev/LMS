const _ = require('lodash');

module.exports = {
  parse
};

function parse(query, model) {
  const options = {
    where: {}
  };

  const keywords = [
    'fields',
    'include',
    'limit',
    'offset',
    'sort'
  ];

  options.attributes = parseString(query.fields);
  options.include = parseInclude(query.include, model);
  options.limit = parseInteger(query.limit);
  options.offset = parseInteger(query.offset);
  options.order = parseSort(query.sort);

  _(query)
    .omit(keywords)
    .forOwn((value, key) => {
      if (model.rawAttributes.hasOwnProperty(key)) {
        options.where[key] = parseJson(value);
      }
    });

  return options;
}

function parseString(value) {
  if (value) {
    value = value.split(',');
  }

  return value;
}

function parseJson(value) {
  try {
    value = JSON.parse(value);
  } catch (error) {
    value = parseString(value);
  }

  return value;
}

function parseInteger(value) {
  value = parseInt(value);

  if (_.isNaN(value)) {
    value = undefined;
  }

  return value;
}

function parseSort(value) {
  let sort; // = undefined;

  if (value) {
    const keys = parseString(value);

    sort = _.map(keys, (key) => {
      if (key.indexOf('-') === 0) {
        return [key.substr(1), 'DESC'];
      } else {
        return [key, 'ASC'];
      }
    });
  }

  return sort;
}

function parseInclude(value, model) {
  let include; // = undefined;

  if (value) {
    const keys = parseString(value);

    include = _.map(keys, (key) => {
      if (model.associations.hasOwnProperty(key)) {
        return { model: (model.sequelize.models[model.associations[key].target.name]), as: key };
      }
    });
  }

  return include;
}
