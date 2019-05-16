import React, { FC } from 'react';

interface IProps {
  source: string;
  title?: string;
}

export const Link: FC<IProps> = props => (
  <a target="blank" href={props.source} title={props.title}>
    {props.children}
  </a>
);
