import { IAnswer } from '../../types/business';
import { getYoutubeId } from '../../utils/tranformation';

interface PropsType {
  answer: IAnswer;
  ignoreGovernor?: boolean;
}
export function ExclusiveQuestionBadge({ answer, ignoreGovernor }: PropsType) {
  const youtubeId = getYoutubeId(answer.url);
  const youtubeEmbedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}`
    : '';

  return (
    <div className="max-w-[1500px] w-[90vw] mt-[50px] mb-[100px]">
      {youtubeEmbedUrl ? (
        <iframe
          className="max-w-[1500px] max-h-[843.75px] w-[90vw] h-[50.625vw] mb-[40px]"
          src={youtubeEmbedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="max-w-[1500px] max-h-[843.75px] w-[90vw] h-[50.625vw] mb-[40px] bg-[#333333] typo-h3 text-white flex items-center justify-center">
          No Video
        </div>
      )}

      {!ignoreGovernor && (
        <p className="typo-h6 text-white mb-[20px]">
          {answer.governorsRead.name}
        </p>
      )}
      <p className="typo-b3 text-white max-w-[650px] m-auto">{answer.text}</p>
    </div>
  );
}