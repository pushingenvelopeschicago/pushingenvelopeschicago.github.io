import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

export const Home: React.VFC = () => (
  <div>
    <P>
      Grounded in prison abolition, Pushing Envelopes Chicago builds lgbtq+ community across bars through penpal relationships, legal aid, and re-entry support.

    </P>
    <P>
     Values/Statement of Principles:
    To push the envelope is a phrase that means to extend the limits of what is possible or take radical risks. We recognize and honor that surviving incarceration is a radical and transcendent risk, and every day is an incredible act of resilience, particularly for lgbtq+ people.

    </P>
      <P>We are accessible to every prison and jail in Illinois for people who identify as lgbtq+ and/or are living with HIV. We believe that no one is disposable, that abolition is inextricably linked to lgbtq+ liberation, and that our work is not finished until everyone is free from all forms of imprisonment, surveillance, and punishment.</P>
      <P>We collaborate with other organizations in Chicago to fight against criminal registries and housing banishment laws that perpetuate homelessness and reincarceration, to support clemency campaigns and lawsuits against IDOC, and to ensure that our folks have the tools they need to survive, both while locked up and for those who are released.</P>
      <P>Who we are:
            Pushing Envelopes Chicago is a collectively-run volunteer organization.  Our membership consists of currently incarcerated, formerly-incarcerated, system-impacted, and allied individuals with a shared commitment to building community at the intersection of incarceration and LGBTQ+ identities.
        </P>
      <P></P>
    <P>
      <LinkContainer>
        <InteractiveLink to="/history">History</InteractiveLink>
      </LinkContainer>
      {/*<LinkContainer>*/}
      {/*  <InteractiveLink to="/example/two-deep?field1=foo&field2=bar#boom!">*/}
      {/*    Example two deep with query and hash*/}
      {/*  </InteractiveLink>*/}
      {/*</LinkContainer>*/}
    </P>
  </div>
);
