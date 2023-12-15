import * as S from './SkeletonCard.styles';

export function SkeletonCard() {
  return (
    <S.RootSkeleton>
      <S.TittleSkeleton />
      <S.ImageSkeleton />
      <S.TextSkeleton>
        <div></div>
        <div></div>
        <div></div>
      </S.TextSkeleton>
      <S.ButtonsSkeleton>
        <div></div>
        <div></div>
      </S.ButtonsSkeleton>
    </S.RootSkeleton>
  );
}
