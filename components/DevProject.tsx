import React from 'react';
import GitHubIcon from './icons/GitHubIcon';

/**
 * Component properties for a DevProject.
 */
type DevProjectProps = {
  /**
   * The name of the project.
   */
  title: string;

  /**
   * A few sentences describing this project.
   */
  description: string;

  /**
   * A longer description that will be rendered when showing a details overlay.
   */
  overlay_description: string[];

  /**
   * A tag identifying this project.
   *
   * TODO: Document purpose of tag.
   */
  tag: string;

  /**
   * A list of names for people to associate with this project.
   */
  contributors: string[];

  /**
   * A link to this project's source code.
   */
  repo: string;

  /**
   * A place where this project can be found.
   */
  link: string;

  /**
   * True if this should show a project details overlay, false otherwise.
   */
  showOverlay: boolean;

  /**
   * A callback triggered when the parent component should hide the overlay.
   */
  onHideOverlay?: () => void;
};

/**
 * A card that shows basic project information including a description and contributor information.
 */
export default function DevProject({
  title,
  description,
  overlay_description,
  tag,
  contributors,
  repo,
  link,
}: DevProjectProps) {
  // TODO: Hoist shouldShowOverlay state up with showOverlay component prop
  const [shouldShowOverlay, setShouldShowOverlay] = React.useState(false);

  const hideOverlay = () => setShouldShowOverlay(false);
  const openOverlay = () => setShouldShowOverlay(true);

  if (shouldShowOverlay) {
    return (
      <ProjectOverlay
        // A shortcut so we don't have to specify both the keys and values for variables
        {...{
          title,
          description,
          overlay_description,
          tag,
          contributors,
          repo,
          link,
          showOverlay: shouldShowOverlay,
          hideOverlay,
          onHideOverlay: hideOverlay,
        }}
      />
    );
  }

  const contributorsList = contributors.map((contributor) => (
    <div key={contributor}>{contributor}</div>
  ));

  return (
    <div
      onClick={openOverlay}
      className="transition relative m-8 p-3 text-lg bg-black w-96 h-80 rounded-lg cursor-pointer card"
    >
      <div className="text-lg font-black text-center">{title}</div>
      <div className="text-sm mt-1 font-medium text-center">{tag}</div>
      <div className="flex justify-center my-3 mx-1 h-3/5">
        <div className="text-base font-bold min-w-2/5">{contributorsList}</div>
        <div className="text-base font-medium">{description}</div>
      </div>
      <div className="repocontainer">
        <GitHubIcon />
        <a className="repo" href={link}>
          {repo}
        </a>
      </div>
    </div>
  );
}

/**
 * A full-screen overlay that displays detailed information about a project.
 */
function ProjectOverlay({
  title,
  tag,
  contributors,
  overlay_description,
  link,
  repo,
  onHideOverlay = () => undefined,
}: DevProjectProps) {
  const descriptionBlocks = overlay_description.map((descriptionItem) => (
    <div key={descriptionItem} className="text-base mb-4 font-medium">
      {descriptionItem}
    </div>
  ));
  const contributorsList = contributors.map((contributor) => (
    <div key={contributor} className="mb-3">
      {contributor}
    </div>
  ));

  const hideOverlay = () => onHideOverlay();

  return (
    <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full bg-overlay z-10">
      <div className="relative m-auto w-4/5 h-5/6 bg-overlay-card rounded-2xl">
        <div className="overlay_exit">
          <svg onClick={hideOverlay} viewBox="0 0 352 512">
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </svg>
        </div>
        <div className="mt-8 text-3xl font-black text-center">{title}</div>
        <div className="mt-3 text-base font-bold text-center">{tag}</div>
        <div className="m-auto flex items-baseline justify-center w-full">
          <div className="flex flex-col justify-center text-base max-w-1/4 m-4 ml-1">
            <div className="text-2xl font-bold">Contributors</div>
            <div>{contributorsList}</div>
          </div>
          <div className="relative flex flex-col justify-center max-w-3/5 m-8 ml-10 mr-3">
            <div className="text-2xl font-bold">About</div>
            <div className="overlay_about_paragraph_container">
              {descriptionBlocks.length > 0 ? (
                descriptionBlocks
              ) : (
                <div className="text-base mb-3">{descriptionBlocks}</div>
              )}
            </div>
          </div>
        </div>
        <div className="overlay_repo_container">
          <svg className="overlay_github" viewBox="0 0 496 512">
            <path
              fill="currentColor"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ></path>
          </svg>
          <a className="overlay_repo" href={link}>
            {repo}
          </a>
        </div>
      </div>
    </div>
  );
}
