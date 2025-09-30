import css from './CategoryInfo.module.css';
import { PostPageProps } from '@/types/api';
import Link from 'next/link';

export default function CategoryInfo({ post }: PostPageProps) {
  return (
    <div className={css.categoryInfo}>
      <div className={css.categoryPost}>
        <span>
          <Link href={`/category/${post.category_slug}`}>
            {post.category_title || 'Категория'}
          </Link>
        </span>
      </div>
      <div className={css.categoryAuthor}>
        <span>{post.author_name}</span>
      </div>
    </div>
  );
}
