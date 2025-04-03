import type { Schema, Struct } from '@strapi/strapi';

export interface PoemsLine extends Struct.ComponentSchema {
  collectionName: 'components_poems_lines';
  info: {
    description: '';
    displayName: 'Line';
    icon: 'feather';
  };
  attributes: {
    line: Schema.Attribute.String;
  };
}

export interface PoemsPoem extends Struct.ComponentSchema {
  collectionName: 'components_poems_poems';
  info: {
    description: '';
    displayName: 'Poem';
    icon: 'handHeart';
  };
  attributes: {
    defaultTitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'poem'>;
    Lines: Schema.Attribute.Component<'poems.line', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'poems.line': PoemsLine;
      'poems.poem': PoemsPoem;
    }
  }
}
