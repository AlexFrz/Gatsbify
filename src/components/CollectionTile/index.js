import React from 'react';
import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';
import BackgroundImage from 'gatsby-background-image';
import { StyledLink } from '../StyledLink';
import { Link } from 'gatsby';

export function CollectionTile({
  destination,
  description,
  title,
  backgroundImage,
  sale,
}) {
  return (
    <CollectionTileWrapper>
      <CollectionTileContent>
        <Link to={destination}>
          <div>
            <Title sale={sale}>{title}</Title>
            <Description sale={sale}>{description}</Description>
          </div>
        </Link>
      </CollectionTileContent>
      <BackgroundImage fluid={backgroundImage} />
    </CollectionTileWrapper>
  );
}
